import { Injectable } from '@angular/core';
import { PluginOptions } from './plugin';

@Injectable({ providedIn: 'root' })
export class LookupService {
  lookup(): Promise<PluginOptions[]> {
    // This configuration could also be retrieved via an http call and cached to be more dynamic
    return Promise.resolve([
      {
        remoteEntry: 'http://localhost:3001/remoteEntry.js',
        remoteName: 'mfe2',
        exposedModule: './Chart1',

        displayName: 'Pricing Trends',
        componentName: 'Chart1Component',
      },
      {
        remoteEntry: 'http://localhost:3001/remoteEntry.js',
        remoteName: 'mfe2',
        exposedModule: './Chart2',

        displayName: 'Watch List',
        componentName: 'Chart2Component',
      },
      {
        remoteEntry: 'http://localhost:3001/remoteEntry.js',
        remoteName: 'mfe2',
        exposedModule: './Chart3',

        displayName: 'Current Value',
        componentName: 'Chart3Component',
      },
      {
        remoteEntry: 'http://localhost:3001/remoteEntry.js',
        remoteName: 'mfe2',
        exposedModule: './Chart4',

        displayName: 'Bitcoin Tracker',
        componentName: 'Chart4Component',
      },
    ] as PluginOptions[]);
  }
}
