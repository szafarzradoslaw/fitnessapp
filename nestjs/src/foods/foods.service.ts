import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateFoodDto } from './dto/create-food.dto';
import { UpdateFoodDto } from './dto/update-food.dto';

@Injectable()
export class FoodsService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateFoodDto) {
    return this.prisma.food.create({
      data: dto,
    });
  }

  findAll() {
    return this.prisma.food.findMany({
      include: {
        FoodNutrition: true, // based on your table
      },
    });
  }

  findOne(id: number) {
    return this.prisma.food.findUnique({
      where: { id },
      include: {
        FoodNutrition: true,
      },
    });
  }

  update(id: number, dto: UpdateFoodDto) {
    return this.prisma.food.update({
      where: { id },
      data: dto,
    });
  }

  remove(id: number) {
    return this.prisma.food.delete({
      where: { id },
    });
  }
}