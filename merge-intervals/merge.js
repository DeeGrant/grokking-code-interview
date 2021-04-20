class Interval {
    constructor(start, end) {
        this.start = start
        this.end = end
    }

    print_interval() {
        // console.log without a newline
        process.stdout.write(`${this.start}, ${this.end}`)
    }
}

function merge(intervals) {
    if (intervals.length < 2) {
        return intervals
    }

    //sort the intervals on the start time - reduces to 4 cases
    intervals.sort((a, b) => a.start - b.start)

    const mergedIntervals = []
    let start = intervals[0].start
    let end = intervals[0].end

    for (i = 1; i < intervals.length; i++) {
        const interval = intervals[i]
        if (interval.start <= end) { // overlapping intervals
            end = Math.max(interval.end, end)
        } else { // non-overlapping interval
            mergedIntervals.push(new Interval(start, end))
            start = interval.start
            end = interval.end
        }
    }
    // add the last interval
    mergedIntervals.push(new Interval(start, end))

    return mergedIntervals
}

