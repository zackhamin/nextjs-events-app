const { events } = require("./data.json");

export default function handler(req, res) {
  const evt = events.filter((e) => e.slug === req.query.slug);

  if (req.method === "GET") {
    res.status(200).json(evt);
  } else {
    res.setHeader("ALLOW", ["GET"]);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}
