// https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json
export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
