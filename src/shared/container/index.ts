import { container } from 'tsyringe';
import { ICategoryRepository } from '../../modules/car/repositories/interface/ICategoryRepository';
import { CategoryRepository } from '../../modules/car/repositories/CategoryRepository';
import { ISpecificationRepository } from '../../modules/car/repositories/interface/ISpecificationRepository';
import { SpecificationRepository } from '../../modules/car/repositories/SpecificationRepository';

container.registerSingleton<ICategoryRepository>(
    "CategoryRepository",
    CategoryRepository
);

container.registerSingleton<ISpecificationRepository>(
    "SpecificationRepository",
    SpecificationRepository
);