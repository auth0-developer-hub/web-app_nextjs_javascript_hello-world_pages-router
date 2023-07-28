const getProtectedMessage = async (req, res) => {
  const message = {
    text: "This is a protected message.",
  };

  res.status(200).json(message);
};

export default getProtectedMessage;
