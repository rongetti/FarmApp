import { HerdModule } from './herd.module';

describe('HerdModule', () => {
  let herdModule: HerdModule;

  beforeEach(() => {
    herdModule = new HerdModule();
  });

  it('should create an instance', () => {
    expect(herdModule).toBeTruthy();
  });
});
