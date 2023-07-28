import { getAccessToken, withApiAuthRequired } from "@auth0/nextjs-auth0";
import { callExternalApi } from "../../../services/external-api.service";

const apiServerUrl = process.env.API_SERVER_URL;

const getProtectedMessage = async (req, res) => {
  try {
    const { accessToken } = await getAccessToken(req, res);

    const config = {
      url: `${apiServerUrl}/api/messages/protected`,
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    };

    const { data, error, status } = await callExternalApi({
      config,
    });

    if (data) {
      res.status(status).json(data);
      return;
    }

    res
      .status(status || 500)
      .json(error || { message: "Unable to retrieve message" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export default withApiAuthRequired(getProtectedMessage);
