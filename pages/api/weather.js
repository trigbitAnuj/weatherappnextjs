// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const handler = async (req, res) => {
  const city = req.query?.city;
  if (!city) {
    res.status(400).send("city missing");
  }
  const dataRes = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_API_KEY}&units=metric  `
  );
  const data = await dataRes.json();
  res.status(200).send(data);
};

export default handler;
