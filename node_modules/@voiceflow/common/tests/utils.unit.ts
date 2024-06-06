import { expect } from 'chai';

import { getRequiredProcessEnv } from '@/utils/env';

describe('test utils functions', () => {
  it('throws if process env is not found', () => {
    expect(() => getRequiredProcessEnv('FOO')).to.throw('env var: FOO not found');
    process.env.FOO = 'something';
    expect(getRequiredProcessEnv('FOO')).to.eql('something');
  });
});
