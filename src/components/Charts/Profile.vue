<template>
  <div :id="id" :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
import resize from './mixins/resize'
import moment from 'moment'

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    id: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '200px'
    },
    height: {
      type: String,
      default: '200px'
    }
  },
  data() {
    return {
      chart: null,
      categories: ['CHP01'],
      // startTime: new Date(),
      data: [],
      types: [
        { name: 'JS Heap', color: '#7b9ce1' },
        { name: 'Documents', color: '#bd6d6c' },
        { name: 'Nodes', color: '#75d874' },
        { name: 'Listeners', color: '#e0bc78' },
        { name: 'GPU Memory', color: '#dc77dc' },
        { name: 'GPU', color: '#72b362' }
      ]
    }
  },
  mounted() {
    this.generateMockData()
    this.initChart()
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = echarts.init(document.getElementById(this.id))

      this.chart.setOption({
        // backgroundColor: '#394056',
        title: {
          text: '稼動狀況',
          left: 'left'
        },
        tooltip: {
          formatter: function(params) {
            var labelName = params.name + ': ' + moment(params.value[3]).format('mm') + 'min'
            return labelName
          }
        },

        dataZoom: [
          {
            type: 'slider',
            filterMode: 'weakFilter',
            showDataShadow: false,
            top: 400,
            labelFormatter: ''
          },
          {
            type: 'inside',
            filterMode: 'weakFilter'
          }
        ],

        grid: {
          height: 300
        },
        xAxis: {
          min: +new Date('2021-05-06 09:00'),
          scale: true,
          axisLabel: {
            formatter: function(val) {
              return moment(val).format('HH:mm:ss')
            }
          }
        },
        yAxis: { data: this.categories },
        series: [{
          type: 'custom',
          renderItem: this.renderItem,
          itemStyle: {
            opacity: 0.8
          },
          encode: {
            x: [1, 2],
            y: 0
          },
          data: this.data
        }]
      })
    },

    renderItem(params, api) {
      var categoryIndex = api.value(0)
      var start = api.coord([api.value(1), categoryIndex])
      var end = api.coord([api.value(2), categoryIndex])
      var height = api.size([0, 1])[1] * 0.6

      var rectShape = echarts.graphic.clipRectByRect({
        x: start[0],
        y: start[1] - height / 2,
        width: end[0] - start[0],
        height: height
      }, {
        x: params.coordSys.x,
        y: params.coordSys.y,
        width: params.coordSys.width,
        height: params.coordSys.height
      })

      return rectShape && {
        type: 'rect',
        transition: ['shape'],
        shape: rectShape,
        style: api.style()
      }
    },

    generateMockData() {
      // var baseTime = +new Date()
      // console.log('baseTime', baseTime)
      // for (var i = 0; i < 10; i++) {
      //   var typeItem = this.types[Math.round(Math.random() * (this.types.length - 1))]
      //   var duration = Math.round(Math.random() * 10000)
      //   // console.log('duration', duration)
      //   this.data.push({
      //     name: typeItem.name,
      //     value: [
      //       1,
      //       baseTime,
      //       baseTime += duration,
      //       duration
      //     ],
      //     itemStyle: {
      //       normal: {
      //         color: typeItem.color
      //       }
      //     }
      //   })
      //   baseTime += Math.round(Math.random() * 2000)
      // }

      this.data.push({
        name: 'Run',
        value: [
          1,
          new Date('2021-05-06 9:00'),
          new Date('2021-05-06 9:10'),
          10 * 60000
        ],
        itemStyle: {
          normal: {
            color: '#75d874'
          }
        }
      })

      this.data.push({
        name: 'Down',
        value: [
          1,
          new Date('2021-05-06 9:10'),
          new Date('2021-05-06 9:15'),
          5 * 60000
        ],
        itemStyle: {
          normal: {
            color: '#bd6d6c'
          }
        }
      })

      this.data.push({
        name: 'Idle',
        value: [
          1,
          new Date('2021-05-06 9:15'),
          new Date('2021-05-06 9:30'),
          15 * 60000
        ],
        itemStyle: {
          normal: {
            color: '#e0bc78'
          }
        }
      })
    }
  }
}
</script>
