import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Route,
  Tags,
  Path
} from "tsoa";
import { User } from "../models/user";
import { UserService } from "../services/userService";

@Route("users")
@Tags("User")
export class UserController extends Controller {

  private readonly userService: UserService = new UserService();

  @Get("/")
  public async getUsers(): Promise<User[]> {
    return this.userService.getAllUsers();
  }

  @Get("/{id}")
  public async getUser(@Path() id: number): Promise<User | null> {
    return this.userService.getUserById(id);
  }

  @Post("/")
  public async createUser(@Body() user: User): Promise<User> {
    return this.userService.createUser(user);
  }

  @Put("/{id}")
  public async updateUser(@Path() id: number, @Body() user: User): Promise<User | null> {
    return this.userService.updateUser(id, user);
  }

  @Delete("/{id}")
  public async deleteUser(@Path() id: number): Promise<User | null> {
    return this.userService.deleteUser(id);
  }
}