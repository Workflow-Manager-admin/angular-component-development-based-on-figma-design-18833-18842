#!/bin/bash
cd /home/kavia/workspace/code-generation/angular-component-development-based-on-figma-design-18833-18842/figma_component_frontend
npx eslint
ESLINT_EXIT_CODE=$?
npm run build
BUILD_EXIT_CODE=$?
if [ $ESLINT_EXIT_CODE -ne 0 ] || [ $BUILD_EXIT_CODE -ne 0 ]; then
   exit 1
fi

