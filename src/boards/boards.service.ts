import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardsService {
  private boards = ['특정값'];

  getAllBoards() {
    return this.boards;
  }
}
