## Module Federation Demo

A very simple demo for an application using Webpack Module Federation. Intended as a companion repository for my talk at the React Bangalore Meetup.

### Codebase Organization

Here, we are using a yarn workspaces monorepo structure for demonstration. We have two packages `app-1` and `app-2`. In the real world, these two packages would most likely live in their own separate repositories and would be developed, tested, and deployed independently of each other. 

In our case, `app-1` is the **host**, and `app-2` is the **remote**. We are exposing a component named `AppTwoComponent` from `app-2`. This component would be dynamically loaded at runtime when `app-1` starts. 

```
mf-demo
├── packages
    ├── app-1
    └── app-2
```

### Running the demo locally

- Step 1: Install dependencies
```
yarn install
```

- Step 2: Start both `app-1` and `app-2`
```
yarn dev
```
This will start `app-1` at localhost:3001 and `app-2` at localhost:3002.

- Step 3: View `app-1` at localhost:3001
  - Since we are simply exposing the `AppTwoComponent` from `app-2`, and nothing else, you won't see anything on localhost:3002.
