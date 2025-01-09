import { PrismaClient } from '@prisma/client';
import { User } from "../models/user";

const prisma = new PrismaClient();

export class UserService {
  public async getAllUsers(): Promise<User[]> {
    return prisma.user.findMany();
  }

  public async getUserById(id: number): Promise<User | null> {
    return prisma.user.findUnique({ where: {id} });
  }

  public async createUser(user: User): Promise<User> {
    return prisma.user.create({ data: user });
  }

  public async updateUser(id: number, user: User): Promise<User | null> {
    return prisma.user.update({
      where: { id },
      data: user
    });
  }

  public async deleteUser(id: number): Promise<User | null> {
    return prisma.user.delete({ where: { id } });
  }
}