interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'Running Page',
  siteUrl: 'https://xfeng.io',
  logo: 'https://ipfs.crossbell.io/ipfs/QmWX2ZU7btx6nEgWgqr5Xci6xS8U8VbdGB9gtZhvrna5Cc?img-quality=75&img-format=auto&img-onerror=redirect&img-width=256',
  description: 'Personal site and blog',
  navLinks: [
    {
      name: 'Blog',
      url: 'https://xfeng.io',
    },
    {
      name: 'About',
      url: 'https://xfeng.io/about',
    },
  ],
};

export default data;
