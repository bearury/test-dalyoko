export class CreateUserDto {
  public readonly name: string;

  public readonly email: string;

  public readonly phone: string;

  public readonly project_type: string;

  public readonly project_description: string;

  public readonly budget_min?: number;

  public readonly budget_max?: number;
}
