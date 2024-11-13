declare module 'openmoji' {
  export const openmojis: Array<{
    emoji: string;
    hexcode: string;
    openmoji_tags: string[];
    openmoji_images: {
      color: {
        svg: string;
        png: string;
      };
      black: {
        svg: string;
        png: string;
      };
    };
  }>;
}
