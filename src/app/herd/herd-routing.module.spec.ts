import { HerdRoutingModule } from './herd-routing.module';

describe('HerdRoutingModule', () => {
  let herdRoutingModule: HerdRoutingModule;

  beforeEach(() => {
    herdRoutingModule = new HerdRoutingModule();
  });

  it('should create an instance', () => {
    expect(herdRoutingModule).toBeTruthy();
  });
});
