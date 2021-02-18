export class BakeryRecipe {
    public name: string;
    public description: string;
    public imagePath: string;
    public recipeColor: string;

    constructor(name: string, desc: string,imagePath: string, recipeColor: string) {
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.recipeColor = recipeColor;
    }
}