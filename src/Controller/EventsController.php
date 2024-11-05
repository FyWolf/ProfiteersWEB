<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class EventsController extends AbstractController
{
    #[Route('/events', name: 'app_events')]
    public function index(): Response
    {
        return $this->render('events/index.html.twig', [
        ]);
    }
    #[Route('/events/view/1', name: 'eventViewer')]
    public function index2(): Response
    {
        return $this->render('events/1.html.twig', [
        ]);
    }
}
