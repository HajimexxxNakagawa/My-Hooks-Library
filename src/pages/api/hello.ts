// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
type Response = {
  statusCode: number
}

export default (_req: void, res: Response): void => {
  res.statusCode = 200
}
