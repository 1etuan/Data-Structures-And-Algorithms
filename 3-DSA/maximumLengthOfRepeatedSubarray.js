var findLength = function(nums1, nums2) {
    if (nums1.length === 0 || nums2.length === 0) {
        return 0;
    }

    let nums1WithoutFinalNumber = nums1.slice(0, nums1.length - 1);
    let nums2WithoutFinalNumber = nums2.slice(0, nums2.length - 1);

    let nums1FinalNumber = nums1[nums1.length - 1];
    let nums2FinalNumber = nums2[nums2.length - 1];

    if(nums1FinalNumber === nums2FinalNumber) {
        return 1 + findLength(nums1WithoutFinalNumber, nums2WithoutFinalNumber); 
    } else { 
        return Math.max(findLength(nums1, nums2WithoutFinalNumber), findLength(nums1WithoutFinalNumber, nums2));
    }
};
console.log(findLength([0,0,0,0,0], [0,0,0,0,0]));
console.log(findLength([1,2,3,2,1], [3,2,1,4,7]));
