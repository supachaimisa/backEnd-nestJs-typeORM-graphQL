import RepoService from './repo.service';
export declare class AppController {
    private readonly repoService;
    constructor(repoService: RepoService);
    getHello(): Promise<string>;
}
