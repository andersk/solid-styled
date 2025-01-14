import { describe, expect, it } from 'vitest';
import { compile, SolidStyledOptions } from '../../compiler';

const options: SolidStyledOptions = {
  verbose: false,
};

const FILE = 'src/index.ts';

describe(':global > id selectors', () => {
  it('should scope for id selectors', async () => {
    const code = `
import { css } from 'solid-styled';

export default function Example() {
  css\`
    :global(#example) {
      color: red;
    }
  \`;

  return <h1 id="example">Hello World</h1>;
}
  `;
    expect((await compile(FILE, code, options)).code).toMatchSnapshot();
  });
});
