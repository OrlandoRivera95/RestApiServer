import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Software} from '../models';
import {SoftwareRepository} from '../repositories';

export class SoftwareController {
  constructor(
    @repository(SoftwareRepository)
    public softwareRepository : SoftwareRepository,
  ) {}

  @post('/software')
  @response(200, {
    description: 'Software model instance',
    content: {'application/json': {schema: getModelSchemaRef(Software)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Software, {
            title: 'NewSoftware',
            exclude: ['id'],
          }),
        },
      },
    })
    software: Omit<Software, 'id'>,
  ): Promise<Software> {
    return this.softwareRepository.create(software);
  }

  @get('/software/count')
  @response(200, {
    description: 'Software model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Software) where?: Where<Software>,
  ): Promise<Count> {
    return this.softwareRepository.count(where);
  }

  @get('/software')
  @response(200, {
    description: 'Array of Software model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Software, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Software) filter?: Filter<Software>,
  ): Promise<Software[]> {
    return this.softwareRepository.find(filter);
  }

  @patch('/software')
  @response(200, {
    description: 'Software PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Software, {partial: true}),
        },
      },
    })
    software: Software,
    @param.where(Software) where?: Where<Software>,
  ): Promise<Count> {
    return this.softwareRepository.updateAll(software, where);
  }

  @get('/software/{id}')
  @response(200, {
    description: 'Software model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Software, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Software, {exclude: 'where'}) filter?: FilterExcludingWhere<Software>
  ): Promise<Software> {
    return this.softwareRepository.findById(id, filter);
  }

  @patch('/software/{id}')
  @response(204, {
    description: 'Software PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Software, {partial: true}),
        },
      },
    })
    software: Software,
  ): Promise<void> {
    await this.softwareRepository.updateById(id, software);
  }

  @put('/software/{id}')
  @response(204, {
    description: 'Software PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() software: Software,
  ): Promise<void> {
    await this.softwareRepository.replaceById(id, software);
  }

  @del('/software/{id}')
  @response(204, {
    description: 'Software DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.softwareRepository.deleteById(id);
  }
}
