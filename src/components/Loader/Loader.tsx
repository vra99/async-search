import React, { FC } from 'react';
import ContentLoader from 'react-content-loader';

export const Loader: FC = (props) => (
  <ContentLoader
    width={434}
    height={75}
    viewBox="0 0 434 75"
    backgroundColor="#f5f5f5"
    foregroundColor="#dbdbdb"
    {...props}
  >
    <rect x="107" y="72" rx="3" ry="3" width="111" height="9" />
    <rect x="108" y="54" rx="3" ry="3" width="163" height="9" />
    <rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
    <rect x="75" y="71" rx="0" ry="0" width="2" height="0" />
    <rect x="17" y="9" rx="0" ry="0" width="72" height="128" />
    <rect x="107" y="14" rx="0" ry="0" width="316" height="18" />
    <rect x="218" y="17" rx="0" ry="0" width="3" height="1" />
    <rect x="221" y="18" rx="0" ry="0" width="1" height="0" />
    <rect x="222" y="18" rx="0" ry="0" width="1" height="0" />
    <rect x="107" y="38" rx="0" ry="0" width="163" height="9" />
  </ContentLoader>
);

Loader.displayName = 'Loader';
