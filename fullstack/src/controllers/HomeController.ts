import type { Request, Response } from "express";
import { books } from "../data/Books.js";
import { Book } from "../models/Book.js";

export class HomeController {
  static index(req: Request, res: Response): void {
    const viewData: { title: string } = { title: "Home" };
    res.render("home/index", { viewData });
  }

  static about(req: Request, res: Response): void {
    const viewData: { title: string } = { title: "About" };
    res.render("home/about", { viewData });
  }

  static contact(req: Request, res: Response): void {
    const viewData: { title: string } = { title: "Contact" };
    res.render("home/contact", { viewData });
  }

  static mainPoint(req: Request, res: Response): void {
    const viewData: { title: string; books: Book[] } = {
      title: "Books",
      books,
    };
    res.render("home/books", { viewData });
  }

  static show(req: Request, res: Response): void {
    const idParam = req.params.id as string;
    const id = parseInt(idParam, 10);
    const book = Book.findById(books, id);

    const viewData: { title: string } = { title: book.title };
    res.render("home/show", { viewData, book });
  }
}
