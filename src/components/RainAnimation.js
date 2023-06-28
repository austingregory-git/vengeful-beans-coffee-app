function renderRain() {
    const RENDERER = {
        INIT_RAIN_DROP_COUNT: 1500,
        RAIN_DROP_COUNT: 8,
        HUMAN_COUNT: 30,
        COLOR: 'hsl(%hue, 20%, %luminance%)',
        HUE_OFFSET: Math.PI / 1000,
        LUMINANCE_OFFSET: Math.PI / 1500,
      
        init: function () {
          this.setParameters();
          this.reconstructMethod();
          this.createRainDrops(this.INIT_RAIN_DROP_COUNT, true);
          this.render();
        },
        setParameters: function () {
          this.container = document.getElementById('jsi-rain-container');
          this.width = this.container.clientWidth;
          this.height = this.container.clientHeight;
          this.canvas = document.createElement('canvas');
          this.canvas.width = this.width;
          this.canvas.height = this.height;
          this.container.appendChild(this.canvas);
          this.context = this.canvas.getContext('2d');
      
          this.rainDrops = [];
          this.theta = 0;
          this.phi = 0;
        },
        reconstructMethod: function () {
          this.render = this.render.bind(this);
        },
        getRandomValue: function (range) {
          return range.min + (range.max - range.min) * Math.random();
        },
        createRainDrops: function (count, toInit) {
          for (var i = 0; i < count; i++) {
            this.rainDrops.push(new RAIN_DROP(this.width, this.height, toInit, this));
          }
        },
        render: function () {
          requestAnimationFrame(this.render);
      
          this.color = this.COLOR.replace('%hue', 205 + 5 * Math.sin(this.phi));
          this.context.fillStyle = this.color.replace('%luminance', 35 + 5 * Math.sin(this.theta));
          this.context.fillRect(0, 0, this.width, this.height);
      
          for (var i = this.rainDrops.length - 1; i >= 0; i--) {
            if (!this.rainDrops[i].render(this.context, false)) {
              this.rainDrops.splice(i, 1);
            }
          }
          for (var i = this.rainDrops.length - 1; i >= 0; i--) {
            if (!this.rainDrops[i].render(this.context, true)) {
              this.rainDrops.splice(i, 1);
            }
          }
          this.createRainDrops(this.RAIN_DROP_COUNT, false);
          this.theta += this.LUMINANCE_OFFSET;
          this.theta %= Math.PI * 2;
          this.phi += this.HUE_OFFSET;
          this.phi %= Math.PI * 2;
        },
      };
      
      class RAIN_DROP {
        constructor(width, height, toInit, renderer) {
          this.width = width;
          this.height = height;
          this.toInit = toInit;
          this.renderer = renderer;
      
          this.init();
        }
      
        init() {
          this.scale = this.renderer.getRandomValue(this.SCALE_RANGE);
          this.length = this.LENGTH_RATE * this.scale;
          this.vx = this.renderer.getRandomValue(this.VELOCITY_RANGE) * this.scale;
          this.vy = this.VELOCITY_RATE * this.scale;
          this.ay = this.ACCELARATION_RATE * this.scale;
      
          this.theta = Math.atan2(this.vy, this.vx);
      
          this.offset = this.height * this.VERTICAL_OFFSET_RATE;
          this.x = this.renderer.getRandomValue({ min: 0, max: this.width - this.height * Math.cos(this.theta) });
          this.y = (this.toInit ? this.renderer.getRandomValue({ min: 0, max: this.height }) : 0) - this.offset;
      
          this.radius = this.length * this.REFLECTION_RADIUS_RATE;
        }
      
        render(context, toFront) {
          if ((toFront && this.scale < this.FRONT_THRESHOLD) || (!toFront && this.scale >= this.FRONT_THRESHOLD)) {
            return true;
          }
          context.save();
          context.strokeStyle = this.COLOR;
      
          if (this.y >= this.height * (1 - (1 - this.scale) * this.THRESHOLD_RATE) - this.offset) {
            context.lineWidth = 3;
            context.globalAlpha = (1 - this.radius / this.length / this.RADIUS_RATE) * 0.5;
            context.beginPath();
            context.arc(this.x, this.y, this.radius, Math.PI, Math.PI * 2, false);
            context.stroke();
            context.restore();
      
            this.radius *= 1.05;
      
            if (this.radius > this.length * this.RADIUS_RATE) {
              return false;
            }
          } else {
            context.lineWidth = 1;
            context.beginPath();
            context.moveTo(this.x, this.y);
            context.lineTo(this.x + this.length * Math.cos(this.theta), this.y + this.length * Math.sin(this.theta));
            context.stroke();
            context.restore();
      
            this.x += this.vx;
            this.y += this.vy;
            this.vy += this.ay;
          }
          return true;
        }
      }
    
      RENDERER.init();    
}

export default renderRain;