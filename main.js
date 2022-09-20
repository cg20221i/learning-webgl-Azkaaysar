function main() {
    var canvas = document.getElementById("myCanvas");
    var gl = canvas.getContext("webgl");
  
  
    var vertices =[

        // Alphabet O
      0.2, 0.69, //Outsider O
      0.4, 0.6,
      0.07, 0.7,
      0.0, 0.6,
      0.07, 0.6,
      0.0, -0.13,
      0.07, -0.28,
      0.0, -0.13,
      0.33, -0.28,
      0.33, -0.13,
      0.33, -0.28,
      0.4, -0.13,
      0.32, 0.6,
      0.4, 0.6,
      

      // Alpahabet s
      -0.58, 0.87,
     -0.8,  0.9,
     -0.86, 0.8,
     -0.86, 0.5,
     -0.83, 0.42,
     -0.8,  0.5,
     -0.8,  0.4,
     -0.75, 0.4,
     -0.64, 0.55,
     -0.6,  0.5,
     -0.6,  0.4,
     -0.6,  0.3,
     -0.68, 0.2,
     -0.8,  0.2,
     -0.86, 0.15,
     -0.8,  0.1,
     -0.65, 0.1,
     -0.53, 0.25,
     -0.53, 0.55,
     -0.6,  0.65,
     -0.8,  0.65,

    //angka 5
    -0.9, -0.9,
    -0.7, -0.9,
    -0.7, -0.7,
    -0.9, -0.7,
    -0.9, -0.5,
    -0.7, -0.5,


    //angka 0
    -0.5, -0.9,
    -0.3, -0.9,
    -0.3, -0.5,
    -0.5, -0.5,
    // 0 inside
    -0.4, -0.6,

    ];
  
    //Create a linked-list for storing vertices data in GPU
    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer); // storing vertices data 
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
  
    //VERTEX SHADER
    var vertexShaderCode = `
      attribute vec2 aPosition;
      void main() {
        gl_PointSize = 15.0;
        gl_Position = vec4(aPosition, 0.0, 1.0);
        //gl_Position is the Final destination for storing
        //positional data for the rendered vertex
      }
    `;
  
    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderCode);
    gl.compileShader(vertexShader);
  
    //FRAGMENT SHADER --> manage color data
    var fragmentShaderCode = `
    precision mediump float;
    void main() {
      gl_FragColor = vec4(0.0, 0.0, 1.0, 1.0);
      //gl_FragColor is the final destinatio for storing
      //color data for rendered fragment
      
    }
    `;
  
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderCode);
    gl.compileShader(fragmentShader);
  
    var shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);
    gl.useProgram(shaderProgram);
  
    //Teach computer how to collect the positional values for ARRAY_BUFFEr
    //for each vertex being proccesed
  
    var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0,0 )
    gl.enableVertexAttribArray(aPosition);
  
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
  
    
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 14);
    gl.drawArrays(gl.TRIANGLE_STRIP, 14, 21);
    gl.drawArrays(gl.LINE_STRIP,35 , 6);
    gl.drawArrays(gl.LINE_LOOP,41 , 4);
    gl.drawArrays(gl.LINE_STRIP,45 , 1);
  }
  