<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class ToolsController extends AbstractController
{
    #[Route('/tools', name: 'app_tools')]
    public function index(): Response
    {
        return $this->render('tools/index.html.twig', [
            'controller_name' => 'ToolsController',
        ]);
    }
    #[Route('/tools/modpackChecker', name: 'modpackChecker')]
    public function index2(): Response
    {
        return $this->render('tools/modpack.html.twig', [
        ]);
    }
}
