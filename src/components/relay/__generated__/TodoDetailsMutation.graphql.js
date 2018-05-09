/**
 * @flow
 * @relayHash fe921f04bbf3ca58de3eb7f449cdbc0a
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteTodoInput = {
  clientMutationId?: ?string,
  todoId: string,
};
export type TodoDetailsMutationVariables = {|
  input: DeleteTodoInput
|};
export type TodoDetailsMutationResponse = {|
  +deleteTodo: ?{|
    +deletedTodo: ?{|
      +id: string
    |}
  |}
|};
*/


/*
mutation TodoDetailsMutation(
  $input: DeleteTodoInput!
) {
  deleteTodo(input: $input) {
    deletedTodo {
      id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "DeleteTodoInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "deleteTodo",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "DeleteTodoInput!"
      }
    ],
    "concreteType": "DeleteTodoPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "deletedTodo",
        "storageKey": null,
        "args": null,
        "concreteType": "Todo",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "TodoDetailsMutation",
  "id": null,
  "text": "mutation TodoDetailsMutation(\n  $input: DeleteTodoInput!\n) {\n  deleteTodo(input: $input) {\n    deletedTodo {\n      id\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "TodoDetailsMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "TodoDetailsMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '06db6ba19f53b961bd19564df52a24f5';
module.exports = node;
