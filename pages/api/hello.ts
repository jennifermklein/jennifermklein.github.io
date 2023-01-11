// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// [API routes] can be accessed on http://localhost:3000/api/hello
// The `pages/api` directory is mapped to `/api/*`.
// Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}
