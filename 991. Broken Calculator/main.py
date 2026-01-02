class Solution(object):
    def brokenCalc(self, startValue, target):
        """
        :type startValue: int
        :type target: int
        :rtype: int
        """
        res = 0
        val = target

        if startValue >= target:
            return startValue - target

        while val != startValue:
            if val % 2 == 0 and val > startValue:
                val //= 2
            else:
                val += 1
            res += 1

        return res
