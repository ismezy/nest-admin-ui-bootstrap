export interface Domain extends BaseDomain {
  get domainName(): string;
}

class BaseDomain {
  public get domainName(): string {
    return this.constructor.name;
  }
}
