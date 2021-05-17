import { ReinstatementTypeCodeResponse } from './referenceTypes';
export interface ReinstatementTypeDetails {
    reinstatement_type_code: ReinstatementTypeCodeResponse;
    reinstatement_type_code_string: string;
    reinstatement_type_location_text?: string | null;
}
