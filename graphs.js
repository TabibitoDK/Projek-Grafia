
function linear_line(m, c) {
    beginShape();
    for (let x=-10000; x < 10000; x++) {
        let newx = x;
        let newy = m * x + c;
        vertex(newx *scale , -1 * newy *scale);
    }
    endShape();
}

function quadratic_curve(a, p, q) {
    beginShape();
    for (let x=-10000; x < 10000; x++) {
        let newx = x*0.1;
        let newy = a * (newx - p) ** 2 + q;
        vertex(newx *scale , -1 * newy *scale);
    }
    endShape();
}

function cubic_curve(a, p, q) {
    beginShape();
    for (let x=-10000; x < 10000; x++) {
        let newx = x*0.1;
        let newy = a * (newx - p) ** 3 + q;
        vertex(newx *scale , -1 * newy *scale);
    }
    endShape();
}


function circle_curve(r, p, q) {
    let radius = r * scale;
    let p_x = p * scale;
    let q_y = q * scale;
    beginShape();
    for (let x=-radius; x <= radius; x++) {
        let newx = x;
        let newy = (((radius ** 2) - ((newx)**2))**(1/2));
        vertex(newx + p_x , -1 * (newy + q_y));
    }
    for (let x=radius; x >= -radius; x--) {
        let newx = x;
        let newy = (((radius ** 2) - ((newx)**2))**(1/2));
        vertex(newx + p_x , 1 * (newy - q_y));
    }
    endShape();
    return 
}

function elipse_curve(p, q, a, b) {
    let p_x = p * scale;
    let q_y = q * scale;
    beginShape();
    for (let x=-(a*100); x <= (a*100); x++) {
        let newx = x;
        let newy = ((((b*scale) ** 2) - ((newx)**2) * ((b/a)**2))**(1/2));
        vertex(newx + p_x , -1 * (newy + q_y));
    }
    for (let x=(a*100); x >= -(a*100); x--) {
        let newx = x;
        let newy = ((((b*scale) ** 2) - ((newx)**2)* ((b/a)**2))**(1/2));
        vertex(newx + p_x , 1 * (newy - q_y));
    }
    endShape();
    return 
}



function Hyperbola_curve(p, q, a, b, axis) {
    let p_x = p * scale;
    let q_y = q * scale;
    beginShape();
    for (let x=-(10000); x <= 0; x++) {
        let newx = x;
        let newy = ((((newx)**2) * ((b/a)**2)) - axis * ((b*scale)**2)) ** (1/2);
        vertex(newx + p_x , -1 * (newy + q_y));
    }
    endShape();
    beginShape();
    for (let x=-(10000); x <= 0; x++) {
        let newx = x;
        let newy = ((((newx)**2) * ((b/a)**2)) - axis * ((b*scale)**2)) ** (1/2);
        vertex(newx + p_x , 1 * (newy - q_y));
    }
    endShape();
    beginShape();
    for (let x=(10000); x >= 0; x--) {
        let newx = x;
        let newy = ((((newx)**2) * ((b/a)**2)) - axis * ((b*scale)**2)) ** (1/2);
        vertex(newx + p_x , -1 * (newy + q_y));
    }
    endShape();
    beginShape();
    for (let x=(10000); x >= 0; x--) {
        let newx = x;
        let newy = ((((newx)**2) * ((b/a)**2)) - axis * ((b*scale)**2)) ** (1/2);
        vertex(newx + p_x , 1 * (newy - q_y));
    }
    endShape();
    return 
}


function parabolic_curve(h, k, p, axis) {
    beginShape();
    for (let x=-10000; x < 10000; x++) {
        let newx = x*0.01;
        let newy = (4 * p * newx) **(1/2);
        vertex(newx *scale , -1 * newy *scale);
    }
    endShape();
    beginShape();
    for (let x=-10000; x < 10000; x++) {
        let newx = x*0.1;
        let newy = (4 * p * newx) **(1/2);
        vertex(newx *scale , 1 * newy *scale);
    }
    endShape();
}


function poly_curve(p, data) {
    beginShape();
    for (let x=-10000; x <= 0; x++) {
        let newx = x * 0.1;
        let newy = polynomial_y(newx,p, data);
        vertex(newx *scale , -1 * newy *scale);
    }
    endShape();
    beginShape();
    for (let x=10000; x >= 0; x--) {
        let newx = x * 0.1;
        let newy = polynomial_y(newx,p, data);
        vertex(newx *scale , -1 * newy *scale);
    }
    endShape();
}


function polynomial_y (x, p, data) {
    let output = 0;
    for (let i = 0; i< data.length; i++) {
        output += data[i] * (x ** (i+p));
        // output = x ** 4;
        // console.log(output);
    }
    return output;
}