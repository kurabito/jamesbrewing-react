import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default function FeatureList() {
  return (
    <div>
      <div>
        <Link to="/abvogfg">ABV from OG and FG</Link>
      </div>
      <div>
        <Link to="/abvsgbrix">ABV from SG and Brix</Link>
      </div>
    </div>
  );
}
