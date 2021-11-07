import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Hardware extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  Procesador: string;

  @property({
    type: 'string',
  })
  MemoriaCache?: string;

  @property({
    type: 'string',
    required: true,
  })
  MemoriaRam: string;

  @property({
    type: 'string',
    required: true,
  })
  Almacenamiento: string;

  @property({
    type: 'string',
    required: true,
  })
  tipoDiscoduro: string;

  @property({
    type: 'string',
    required: true,
  })
  Marca: string;

  @property({
    type: 'string',
  })
  Modelo?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Hardware>) {
    super(data);
  }
}

export interface HardwareRelations {
  // describe navigational properties here
}

export type HardwareWithRelations = Hardware & HardwareRelations;
