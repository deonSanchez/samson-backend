import axios, { AxiosError, AxiosResponse } from "axios";
import { Request, Response } from "express";

// get all posts
const getPosts = async (req: Request, res: Response) => {
  try {
    let result: AxiosResponse = await axios.get("https://catfact.ninja/fact");
    return res.status(200).json(result.data);
  } catch (error) {
    return res.status(500).json(error);
  }
};

// get a single post
const getPost = async (req: Request, res: Response) => {
  let id: string = req.params.id;
  return res.status(200).json({
    message: `Hello ${id}`,
  });
};

export default { getPosts, getPost };
