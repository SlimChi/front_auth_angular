/* tslint:disable */
/* eslint-disable */
import { TypeAdresse } from './type-adresse';
export interface AdresseResponse {
  codePostal?: string;
  complement?: string;
  id?: number;
  rue?: string;
  typeAdresse?: TypeAdresse;
  ville?: string;
}
