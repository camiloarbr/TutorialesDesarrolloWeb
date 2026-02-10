import type { Request, Response } from "express";
import { books } from "../data/books.js";
import { Book } from "../models/Book.js";

export class HomeController {
  static index(req: Request, res: Response): void {
    const viewData: any = {};
    viewData.title = "Home";
    res.render('home/index', { viewData });
  }

  static about(req: Request, res: Response): void {
    const viewData: any = {};
    viewData.title = "About";
    res.render('home/about', { viewData });
  }

  static contact(req: Request, res: Response): void {
    const viewData: any = {};
    viewData.title = "Contact";
    res.render('home/contact', { viewData });
  }

  static mainPoint(req: Request, res: Response): void {
    const viewData: any = {};
    viewData.title = "Books";
    viewData.books = books;
    res.render("home/books", viewData);
  }

  static show(req: Request, res: Response): void {
    const id = parseInt(req.params.id);
    const book = Book.findById(books, id);
    res.render("home/show", { book });
  }
}
