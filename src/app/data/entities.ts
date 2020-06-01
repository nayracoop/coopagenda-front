export type TProposal = {
  id: number;
  accepted?: boolean;
  details?: string;
  hosted_by: string;
  hosting_coop: string;
  title: string;
  user_id: number;
  slot_ids: Array<number>;
};
export type TSlot = {
  id: number;
  begin: Date;
  duration: number;
  user_id: number;
  proposals?: TProposal[];
};
export type TSlotRes = {
  data: TSlot[];
}
export type TUser = {
  id: number;
  admin?: boolean;
  avatar: string;
  email: string;
  provider: string;
  username: string;
  token: string;
};

export class Slot {
  private proposals = new Map<number, TProposal>();

  constructor(initialProposals?: TProposal[]) {
    if (initialProposals) {
      initialProposals.forEach((proposal) => this.proposals.set(proposal.id, proposal));
    }
  }

  public addProposal(proposal: TProposal) {
    this.proposals.set(proposal.id, proposal);
  }

  public removeProposal(id: number) {
    this.proposals.delete(id);
  }

  get total(): number {
    return this.proposals.size;
  }
}
