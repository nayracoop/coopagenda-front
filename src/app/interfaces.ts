export interface Proposal {
  id: number; // im going to need an id to edit/delete proposals
  accepted: boolean;
  details: string;
  hosted_by: string;
  hosting_coop: string;
  title: string;
  user: string;
  // user: number/id ? como sería el tipo? o sería un objeto con todos los datos del user
  // slot: number/id ? como sería el tipo? o sería un objeto con todos los datos del slot
}

export interface Slot {
  begin: string;
  duration: number;
  proposals: Proposal[];
  user: string;
	// begin: utc_datetime;
	// duration: integer;
	// user: number/id ? como sería el tipo
  //       proposals: array de objetos proposal
}