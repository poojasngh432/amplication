import { Module } from '@nestjs/common';
//import { RelationsResolversModule} from '../../prisma/dal';

import { PrismaModule } from '../services/prisma.module';
import { ExceptionFiltersModule } from '../filters/exceptionFilters.module';
import { CoreModule } from '../core/core.module';

@Module({
  providers: [],
  imports: [PrismaModule, ExceptionFiltersModule, CoreModule],
  exports: []
})
export class ResovlerMapModule {}
