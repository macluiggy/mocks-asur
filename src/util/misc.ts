/**
 * Miscellaneous shared functions go here.
 */

import { Response } from "express";


/**
 * Get a random number between 1 and 1,000,000,000,000
 */
export function getRandomInt(): number {
  return Math.floor(Math.random() * 1_000_000_000_000);
}

/**
 * Wait for a certain number of milliseconds.
 */
export function tick(milliseconds: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, milliseconds);
  });
}


export function responseHandler<T>(res: Response, data: T, status: number = 200): void {
  res.status(status).json({
    Error: 0,
    Data: data,
    Msg: "Success"
  });
}