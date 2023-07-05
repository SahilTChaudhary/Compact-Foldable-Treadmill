//ANSYS Workbench Bodies Transforms File
ag.m.Freeze();
var CurrBodyName = 'Rear Base\Solid1';
Rear Base\Solid1
var CurrBodyName = 'Mid Base\Solid1';
Mid Base\Solid1
var CurrBodyName = 'Front Base\Solid1';
Front Base\Solid1
var CurrBodyName = 'Link\Solid1';
Link\Solid1
var CurrBodyName = 'Link\Solid1';
Link\Solid1
var CurrBodyName = 'Link\Solid1';
Link\Solid1
var CurrBodyName = 'Link\Solid1';
Link\Solid1
var CurrBodyName = 'Handlebar\Solid1';
Handlebar\Solid1
var CurrBodyName = 'Roller - New\Solid1';
Roller - New\Solid1
var CurrBodyName = 'Roller - New\Solid1';
Roller - New\Solid1
var CurrBodyName = 'Roller - New\Solid1';
Roller - New\Solid1
var CurrBodyName = 'Roller - New\Solid1';
Roller - New\Solid1
var CurrBodyName = 'Roller - New\Solid1';
Roller - New\Solid1
var CurrBodyName = 'Roller - New\Solid1';
Roller - New\Solid1
var CurrBodyName = 'Roller - New\Solid1';
Roller - New\Solid1
var CurrBodyName = 'Roller - New\Solid1';
Roller - New\Solid1
var CurrBodyName = 'Roller - New\Solid1';
Roller - New\Solid1
var CurrBodyName = 'Roller - New\Solid1';
Roller - New\Solid1
var CurrBodyName = 'Roller - New\Solid1';
Roller - New\Solid1
var CurrBodyName = 'Roller - New\Solid1';
Roller - New\Solid1
var CurrBodyName = 'Roller - New\Solid1';
Roller - New\Solid1
var CurrBodyName = 'Roller - New\Solid1';
Roller - New\Solid1
var CurrBodyName = 'Roller - New\Solid1';
Roller - New\Solid1
var CurrBodyName = 'Roller - New\Solid1';
Roller - New\Solid1
var CurrBodyName = 'Roller - New\Solid1';
var CurrAngle = 6.480000e+01;
var CurrAxis = 2;
RotateOnAxis();
var TranslationX = -3.641878e-01;
var TranslationY = 9.095871e-02;
var TranslationZ = -3.885781e-16;
Translation();
Roller - New\Solid1
var CurrBodyName = 'Roller - New\Solid1';
var CurrAngle = 6.480000e+01;
var CurrAxis = 2;
RotateOnAxis();
var TranslationX = -3.237206e-01;
var TranslationY = 1.327811e-01;
var TranslationZ = -3.330669e-16;
Translation();
Roller - New\Solid1
var CurrBodyName = 'Roller - New\Solid1';
var CurrAngle = 6.480000e+01;
var CurrAxis = 2;
RotateOnAxis();
var TranslationX = -4.046550e-01;
var TranslationY = 4.913629e-02;
var TranslationZ = -4.440892e-16;
Translation();
Roller - New\Solid1
var CurrBodyName = 'Roller - New\Solid1';
Roller - New\Solid1
var CurrBodyName = 'Roller - New\Solid1';
Roller - New\Solid1
var CurrBodyName = 'Roller - New\Solid1';
Roller - New\Solid1
var CurrBodyName = 'Roller - New\Solid1';
Roller - New\Solid1
var CurrBodyName = 'Roller - New\Solid1';
Roller - New\Solid1
var CurrBodyName = 'Roller - New\Solid1';
Roller - New\Solid1
var CurrBodyName = 'Roller - New\Solid1';
Roller - New\Solid1
var CurrBodyName = 'Roller - New\Solid1';
Roller - New\Solid1
var CurrBodyName = 'Roller - New\Solid1';
Roller - New\Solid1
function
Translation() {
    ag.m.SelectionMgr.ClearSelection();
    var n_bodies = ag.fm.BodyCount;
    var bodyRoot = ag.tree.Nodes(ag.bROOT);
    bodyRoot.Expanded = true;
    Node = bodyRoot.Child;
    for (var i = 0; i < n_bodies, Node != null ; ++i)
    {
        var name = Node.Text;
        if( name == CurrBodyName )
        {
            ag.guiScript.agTree_SelectNode(Node);
            break;
        }
        Node = Node.Next;
    }
    TranslateBody = ag.agApplet.GUIModeler.CreateBodyOp(10);
    // Translation
    // Do Not preserve bodies
    TranslateBody.CopyBodies = 0;
    // Components
    TranslateBody.BodyOpTranslationDefinitionType = 1;
    // Translation Value
    TranslateBody.BodyOpTranslationVectorX = TranslationX;
    TranslateBody.BodyOpTranslationVectorY = TranslationY;
    TranslateBody.BodyOpTranslationVectorZ = TranslationZ;
}
function
RotateOnAxis() {
    ag.m.SelectionMgr.ClearSelection();
    var n_bodies = ag.fm.BodyCount;
    var bodyRoot = ag.tree.Nodes(ag.bROOT);
    bodyRoot.Expanded = true;
    Node = bodyRoot.Child;
    for (var i = 0; i < n_bodies, Node != null ; ++i)
    {
        var name = Node.Text;
        if( name == CurrBodyName )
        {
            ag.guiScript.agTree_SelectNode(Node);
            break;
        }
        Node = Node.Next;
    }
    RotateBody = ag.agApplet.GUIModeler.CreateBodyOp(11);
    // Rotation
    // Do Not preserve bodies
    RotateBody.CopyBodies = 0;
    // Components
    RotateBody.BodyOpRotationDefinitionType = 1;
    // Rotation Value
    RotateBody.BodyOpRotationAxisX = 0.;
    RotateBody.BodyOpRotationAxisY = 0.;
    RotateBody.BodyOpRotationAxisZ = 0.;
    if (CurrAxis == 0)
        RotateBody.BodyOpRotationAxisX = 1.;
    else if (CurrAxis == 1)
        RotateBody.BodyOpRotationAxisY = 1.;
    else
        RotateBody.BodyOpRotationAxisZ = 1.;
    RotateBody.BodyOpRotationAngle = CurrAngle;
}
