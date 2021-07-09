# EF Class Mutation container

A directive to observe and emit an elements mutations

## IO

- **@Input(efClassMutationContainer):** `MutationObserverInit`. Values to supply to the MutationObserver
- **@Output(mutationNotification):** `EventEmitter<MutationRecord[]>`. An array of MutationRecord


## Usage

```html
<div [ef-class-mutation-container]="{options}"
    (mutationNotification)="handleMutation($event)">

</div>
```
