import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Software extends Entity {
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
  sistemaOperativo: string;

  @property({
    type: 'string',
    required: true,
  })
  Antivirus: string;

  @property({
    type: 'string',
  })
  Licencia?: string;

  @property({
    type: 'string',
  })
  LenguajeProgramacion?: string;

  @property({
    type: 'string',
  })
  Aplicaciones?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Software>) {
    super(data);
  }
}

export interface SoftwareRelations {
  // describe navigational properties here
}

export type SoftwareWithRelations = Software & SoftwareRelations;
