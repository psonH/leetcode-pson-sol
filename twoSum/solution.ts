function twoSum(nums: number[], target: number): number[] {
    let indices: number[] = [];
    let tallyMap = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        let x = target - nums[i];
        if (tallyMap.has(x)) {
            indices[0] = tallyMap.get(x)!;
            indices[1] = i;
            break;
        } else {
            tallyMap.set(nums[i], i)
        }
    }
    return indices;
};