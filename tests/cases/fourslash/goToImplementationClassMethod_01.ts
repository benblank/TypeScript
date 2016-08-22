/// <reference path='fourslash.ts'/>

// Should handle calls made on member declared in an abstract class

//// abstract class AbstractBar {
////     abstract he/*declaration*/llo(): void;
//// }
////
//// class Bar extends AbstractBar{
////     [|hello() {}|]
//// }
////
//// function whatever(x: AbstractBar) {
////     x.he/*reference*/llo();
//// }

goTo.marker("reference");
verify.allRangesAppearInImplementationList();

goTo.marker("declaration");
verify.allRangesAppearInImplementationList();