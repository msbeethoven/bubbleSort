describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect( split ([2,5,7,1,3,20,15])).toEqual([[2,5,7,1],[3,20,15]]);
  });
 
 });
 
 describe('Merge function', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    // test the merging algorithm
    expect( merge ([2],[5,7])).toEqual([2,5,7]);
    expect( merge ([7],[1])).toEqual([1,7]);
    expect( merge ([2,5],[1,7])).toEqual([1,2,5,7]);
    expect( merge ([3,20])).toEqual([3,20]);
    expect( merge ([15])).toEqual([15]);
    expect( merge ([3,20],[15])).toEqual([3,15,20]);
    expect( merge ([2,5,1,7],[3,15,20])).toEqual([1,2,3,5,7,15,20]);
  });
 
describe('Merge Sort', function(){
  it('is able to merge all sorted numbers in one array', function(){
    expect( mergeSort([2,5,7,1,3,20,15])).toEqual([1,2,3,5,7,15,20])
    expect( mergeSort([2])).toEqual([2])
    expect( mergeSort([]).toEqual([]))
  })

})
 
 });

